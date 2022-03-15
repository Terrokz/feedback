import { createContext, useState } from "react"
import { v4 as uuidv4 } from 'uuid'
const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => { 
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'Feedback item number 2',
            rating: 10
        },
        {
            id: 2,
            rating: 2,
            text: 'jakis tam text1 pierwszy'
        },
        {
            id: 3,
            rating: 7,
            text: 'drugi tekst recenzji feedback'
        }
    ])
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    })
    
    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete?')) {
          setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    const addFeedback = (newFeedback) => { 
        newFeedback.id = uuidv4()
        setFeedback([newFeedback,...feedback])
    }

    const editFeedback = (item) => { 
        setFeedbackEdit({
            item,
            edit: true,
        })
     }

     const updateFeedback = (id, updItem) => { 
        setFeedback(feedback.map((item) => (item.id ===id ? {...item,...updItem} : item))
        )
      }

    return <FeedbackContext.Provider value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
 }

 export default FeedbackContext