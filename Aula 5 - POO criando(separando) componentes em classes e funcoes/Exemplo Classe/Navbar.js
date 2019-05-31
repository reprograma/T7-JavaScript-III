
    class Navbar {
        constructor(){}

        createNavbar() {
        return (
            ` 
           <img class="navbar__logo" src="./logo.png" alt="Logo" />
           <div class="group__input">
                <input class="input__search" type="search" placeholder="Search" aria-label="Search">
                    <button class="button__search"> Search </button>
            </div>            
        `
        )
        }
    }; 


    //isso iria no arquivo de carregamento da pag (index por exemplo)
    let navbar = new Navbar();
    
    let getNav = document.querySelector('nav');
   // getNav.innerHTML += createNavbar();

    getNav.innerHTML += navbar.createNavbar();