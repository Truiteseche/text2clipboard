
function resetBodyClasses() {
    document.body.classList.toggle("no-text", false);
    document.body.classList.toggle("sucess", false);
    document.body.classList.toggle("failure", false);
    document.body.classList.toggle("button", false);
}


function copyURLSearchParamsText(origin="onclick") {
    resetBodyClasses();
    const params = new URLSearchParams(location.search);
    const textToCopy = decodeURIComponent(params.get("text"));
    if (textToCopy !== "null") {
        navigator.clipboard.writeText(textToCopy).then(function() {
            document.body.classList.toggle("success", true);
        }).catch(function() {
            console.log("origin:", origin)
            if (origin === "onclick") {
                document.body.classList.toggle("failure", true);
            } else {
                
                document.body.classList.toggle("button", true);
            }
        });
    } else {
        document.body.classList.toggle("no-text", true);
    }
}

copyURLSearchParamsText("script");


const btn = document.getElementById("copy-btn");
btn.addEventListener("click", copyURLSearchParamsText)
