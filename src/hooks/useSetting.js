import React, { useState } from 'react'
import { updateApiData } from '../utiils';

const useSetting = () => {

    const [receiveNotificationSms , setReceiveNotificationSms] = useState(false)
    const [receiveNotificationEmail , setReceiveNotificationEmail] = useState(false)
    const [communicationNotificationEmail , setCommunicationNotificationEmail] = useState(false)
    const [communicationNotificationSms , setCommunicationNotificationSms] = useState(false)
    const [image , setImage] = useState({})
    const [automaticReportSchedule , setAutomaticReportSchedule] = useState("Daily")
    const [sendReportTo , setSendReportTo] = useState([])
    const [isMaximumFailedTransactionStatus , setIsMaximumFailedTransactionStatus] = useState(false)
    const [isMaximumFailedTransactionValueCrossed , setIsMaximumFailedTransactionValueCrossed] = useState(false)
    const [maximumFailedTransactionStatus , setMaximumFailedTransactionStatus] = useState("")
    const [maximumFailedTransactionValueCrossed , setMaximumFailedTransactionValueCrossed] = useState("")

    const handleUpdateNotification = async () => {
        const formData = {
            receiveNotificationSms,
            receiveNotificationEmail
        };

        try {
          const response = await updateApiData(
            `https://gabriel-backend.vercel.app/api/v1/brandLoyalty/notificationAndReportSetting`,
            formData
          );
       
       
        } catch (error) {
          console.log(error);
          return error;
        }
      };

    const handleUpdateCommunication = async () => {
        const formData = {
            communicationNotificationEmail,
            communicationNotificationSms
        };

        try {
          const response = await updateApiData(
            `https://gabriel-backend.vercel.app/api/v1/brandLoyalty/notificationAndReportSetting`,
            formData
          );
       
       
        } catch (error) {
          console.log(error);
          return error;
        }
      };
    const handleUpdateReport = async () => {
        const formData = new FormData()
        formData?.append("image",image)
        formData?.append("automaticReportSchedule",automaticReportSchedule)
        sendReportTo?.map((d,i)=>(
            formData?.append("sendReportTo", d)
        ))
        formData?.append("isMaximumFailedTransactionStatus",isMaximumFailedTransactionStatus)
        formData?.append("isMaximumFailedTransactionValueCrossed",isMaximumFailedTransactionValueCrossed)
        formData?.append("maximumFailedTransactionStatus",maximumFailedTransactionStatus)
        formData?.append("maximumFailedTransactionValueCrossed",maximumFailedTransactionValueCrossed)
        

        try {
          const response = await updateApiData(
            `https://gabriel-backend.vercel.app/api/v1/brandLoyalty/notificationAndReportSetting`,
            formData
          );
       
       
        } catch (error) {
          console.log(error);
          return error;
        }
      };


  return{
    receiveNotificationSms , setReceiveNotificationSms,
    receiveNotificationEmail , setReceiveNotificationEmail,
    communicationNotificationEmail , setCommunicationNotificationEmail,
    communicationNotificationSms , setCommunicationNotificationSms,
    image , setImage,
    automaticReportSchedule , setAutomaticReportSchedule,
    sendReportTo , setSendReportTo,
    isMaximumFailedTransactionStatus , setIsMaximumFailedTransactionStatus,
    isMaximumFailedTransactionValueCrossed , setIsMaximumFailedTransactionValueCrossed,
    maximumFailedTransactionStatus , setMaximumFailedTransactionStatus,
    maximumFailedTransactionValueCrossed , setMaximumFailedTransactionValueCrossed,
    handleUpdateReport,
    handleUpdateNotification,
    handleUpdateCommunication
  }
}

export default useSetting