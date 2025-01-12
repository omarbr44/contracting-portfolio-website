// tailwind configuration
tailwind.config = {
    theme: {
        extend: {
            colors:{
            "site-primary": "#fe4c25",
            "site-secondary": "#0d0e13",
            "site-section": "#f5f5f5",
            "site-p": "#364152",
            }
        },
        fontFamily:{
            Roboto: ["Roboto, sans-serif"],
        },
        container: {
            padding: "0.5rem",
            center: true,
        },
        screens:{
            sm: {'max': '640px'},
            md: {'max': '1024px',
                'min': '640px'} ,
            lg: '1024px',
        }
},
}
    function showHideNav() {
        let mobileNav = document.querySelector('#mobile-nav')
        if(mobileNav.className != 'hidden') {
            mobileNav.className = 'hidden'
        }
        else {
            mobileNav.className = 'block'
        }
    }
    function toggleAdvanceFilter() {
        let advaneFilter = document.querySelector('#advance-filter-section')
        if(advaneFilter.classList.contains('h-0')) {
            advaneFilter.classList.remove('h-0')
            advaneFilter.classList.add('h-44')
        }
        else {
            advaneFilter.classList.remove('h-44')
            advaneFilter.classList.add('h-0')
        }
    }