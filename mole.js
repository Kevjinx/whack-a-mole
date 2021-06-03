// Write your JS here.



document.querySelectorAll(".mole__head").forEach((moleHead)=> {
    moleHead.addEventListener("click", (e) => {
        console.log("MONTE PYTHON HOTPINK")
        console.log(e.target)
        e.target.classList.add("digging")
        console.log(e.target)
    })
})

