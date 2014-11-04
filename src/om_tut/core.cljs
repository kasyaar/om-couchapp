(ns om-tut.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [dommy.core :refer-macros [sel1]]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [put! chan <!]]
            [clojure.data :as data]
            [clojure.string :as string]))

(enable-console-print!)


(def app-state
  (atom
    {:contacts
     [{:first "Ben" :last "Bitdiddle" :email "benb@mit.edu"}
      {:first "Alyssa" :middle-initial "P" :last "Hacker" :email "aphacker@mit.edu"}
      {:first "Eva" :middle "Lu" :last "Ator" :email "eval@mit.edu"}
      {:first "Louis" :last "Reasoner" :email "prolog@mit.edu"}
      {:first "Cy" :middle-initial "D" :last "Effect" :email "bugs@mit.edu"}
      {:first "Lem" :middle-initial "E" :last "Tweakit" :email "morebugs@mit.edu"}]}))

(defn parse-contact "doc-string" [contact-str]
  (let [[first middle last :as parts] (string/split contact-str #"\s+")
        [first last middle] (if (nil? last) [first middle] [first last middle])
        middle (when middle (string/replace middle "." ""))
        c (if middle (count middle) 0)]
    (when (>= (count parts) 2) 
      (cond-> {:first first :last last}
        (== c 1) (assoc :middle-initial middle)
        (>= c 2) (assoc :middle middle)))))


(defn middle-name "doc-string" [{:keys [middle middle-initial]}]
  (cond 
    middle (str " " middle)
    middle-initial (str " " middle-initial ".")))

(defn display-name "doc-string" [{:keys [first last] :as contact}]
  (str last ", " first (middle-name contact)))


(defn contact-view "doc-string" [contact owner]
  (reify
    om/IRenderState
    (render-state [this {:keys [delete]}]
      (dom/li nil 
              (dom/span nil (display-name contact))
              (dom/button #js {:onClick (fn [e] (put! delete @contact))} "Delete")))))


; (defn handle-change "doc-string" [e owner {:keys [text]}]
  ; (let [value (.. e -target -value)
        ; id (.. e -target -ref)]
    ; ; (if-not (re-find #"[0-9]" value)
      ; ; (om/set-state! owner :text value)
      ; ; (om/set-state! owner :text text)))
    ; (js/alert id)))
(defn add-contact "doc-string" [app owner]
  (let [input (om/get-node owner "new-contact")
        new-contact (-> input
                        .-value
                        parse-contact)]
    (when new-contact
      (om/transact! app :contacts #(conj % new-contact))
      (om/set-state! owner :text "" ))))

(defn handle-change "doc-string" [e owner {:keys [text]}]
  (let [value (.. e -target -value)
        id (keyword (.. e -target -id))]
    (if-not (re-find #"[0-9]" value)
      
      (om/set-state! owner id value)
      (om/set-state! owner id text))))


(defn signin "doc-string" [app owner]
  (let [username (om/get-state owner :username)
        pswd-inpt (sel1 :#pswd)
        pswd (-> 
               pswd-inpt 
               .-value)]
    (set! (.-value pswd-inpt) "")
    (.log js/console (str username ": " pswd))))

(defn contacts-view "doc-string" [app owner]
  (reify
    om/IInitState
    (init-state [_]
      {:delete (chan)
       :username ""
       :token ""})
    om/IWillMount
    (will-mount [_]
      (let [delete (om/get-state owner :delete)]
        (go (loop []
              (let [contact (<! delete)]
                (om/transact! app :contacts
                              (fn [xs] (vec (remove #(= contact %) xs))))
                (recur))))))

    om/IRenderState
    (render-state [this state]
      (dom/div nil
               (dom/div nil 
                        (dom/span nil "Sign in")
                        (dom/div nil 
                                 (dom/input 
                                   #js {:type "text" :id "username"
                                        :onChange #(handle-change % owner state)
                                        :placeholder "username"})
                                 (dom/input 
                                   #js {:type "text" :id "pswd"
                                        :placeholder "password"})
                                 (dom/button 
                                  #js {:onClick #(signin app owner)} "Sign in")))
               ; (dom/h2 nil "Contact list")
               ; (apply dom/ul nil
                      ; (om/build-all contact-view (:contacts app)
                                    ; {:init-state state}))
               ; (dom/div nil
                        ; (dom/input #js {:type "text" :ref "new-contact" :value (:text state)
                                        ; :onChange #(handle-change % owner state)})
                        ; (dom/button #js {:onClick #(add-contact app owner)} "Add contact"))
                        ))))


(om/root contacts-view app-state
         {:target (. js/document (getElementById "contacts"))})

