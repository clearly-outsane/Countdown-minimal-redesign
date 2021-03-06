import gsap from 'gsap'

//close menu animmation
export const staggerRevealClose = (node1, node2) => {
    gsap.to([node1, node2], {
        duration: 0.8,
        height: 0,
        ease: 'power3.inOut',
        stagger: {
            amount: 0.05,
        },
    })
}

//Fade in
export const fadeIn = (node1, duration) => {
    gsap.to(node1, duration, {
        opacity: 1,
    })
}
