// Write your JS here.
window.addEventListener("DOMContentLoaded", (e) => {
  let rand = Math.ceil(Math.random() * 8)

  document.querySelectorAll(".mole__head").forEach((moleHead)=> {
    moleHead.classList.add("digging")
    document.querySelector("#mole__head" + rand).classList.remove("digging")
    moleHead.addEventListener("click", (e) => {
        e.target.classList.add("digging")
        e.target.classList.remove("popup")
        let rand2 = Math.ceil(Math.random() * 8)
        document.querySelector("#mole__head" + rand2).classList.remove("digging")
        document.querySelector("#mole__head" + rand2).classList.add("popup")
    })
  })
})

//
