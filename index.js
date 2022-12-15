document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section")

    const options = {
        rootMargin: "100px 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1]
    }
    
    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const navItem = document.getElementById(`nav-${entry.target.id}`)

            if (entry.intersectionRatio > 0.51) {

                navItem.classList.add("active")
                //   entry.target.classList.add('active')
            } else {
                navItem.classList.remove("active")
                //   entry.target.classList.remove('active')
            }
            
        })
    }, options)
    
    // Iterate over each queried el, and add observer:
    sections.forEach(section => { 
        observer.observe(section)
    })
    
})