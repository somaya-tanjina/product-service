import { useEffect, useState } from "react";

const useToken = (user) => {
    const [token, setToken] = useState("");
    useEffect(() => {
        const userEmail = user?.user?.email;
        console.log(userEmail);

        const currentUser = {
            userEmail: userEmail,
        };
        if (userEmail) {
            fetch(
                `https://frozen-everglades-15145.herokuapp.com/user/${userEmail}`,
                {
                    method: "PUT",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(currentUser),
                }
            )
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    const accessToken = data.token;
                    localStorage.setItem("accessToken", accessToken);
                    setToken(accessToken);
                });
        }
        // 9.16
        //console.log("Inside the user",user);
    }, [user]);
    return [token];
};
export default useToken;
