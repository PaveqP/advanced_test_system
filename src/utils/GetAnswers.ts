import { LocalStorageKeys } from "./LocalStorageKeys";
export const GetAnswers = () => {
    const savedAnswers = localStorage.getItem(LocalStorageKeys.currentAnswer);
    return savedAnswers ? JSON.parse(savedAnswers) : [];
}