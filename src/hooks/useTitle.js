import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `Play Land - ${title}`
    }, [title])
};
export default useTitle;