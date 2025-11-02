import { useEffect } from "react"

export default function LoadUser() {
  useEffect(() => {
    fetch('https://dummyjson.com/users')
        .then(res => res.json())
        .then((data) => console.log(data));
  }, [2]);
  return (
    <div className="text-rose-500 text-4xl">LoadUser</div>
  )
}
