      // NAV section

      const createNav = () =>{
        let nav = document.querySelector('.navbar');
        console.log(nav);
    
        nav.innerHTML = `
        <div class="nav">
        <img src="./IMAGES/dark-logo.png" class="brand-logo" alt="">
        <div class="nav-items">
            <div class="search">
                <input type="text" class="search-box" placeholder="search brand,product">
                <button class="search-btn">search</button>
            </div>
    
            <a href="./Login.html"><img src="./IMAGES/user.png" alt="" id="user"></a>
                <div id="username-display"></div>
        </div>
    </div>
    <ul class="links-container">
        <li class="link-item"><a href="#" class="link">home</a></li>
        <li class="link-item"><a href="./index.html" class="link">women</a></li>
        <li class="link-item"><a href="./index.html" class="link">men</a></li>
        <li class="link-item"><a href="./index.html" class="link">kids</a></li>
        <li class="link-item"><a href="./index.html" class="link">accessories</a></li>
    </ul>    
        `
    }
    createNav();
    
    // home section
    
    const productContainers = [...document.querySelectorAll('.product-container')];
    const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
    const preBtn = [...document.querySelectorAll('.pre-btn')];
    
    productContainers.forEach((item, i) =>{
        let containerDimensions = item.getBoundingClientRect();
        let containerWidth = containerDimensions.width;
    
        nxtBtn[i].addEventListener('click' , () =>{
            item.scrollLeft += containerWidth;
        })
    
        preBtn[i].addEventListener('click' , () =>{
            item.scrollLeft -= containerWidth;
        })
    })
    
    
    // footer section
    
    const createFooter = () =>{
        let footer = document.querySelector('footer');
        console.log(footer);
    
        footer.innerHTML = `
        <div class="footer-content">
        <img src="./IMAGES/light-logo.png" class="logo" alt="" />
        <div class="footer-ul-container">
          <ul class="category">
            <li class="category-title">men</li>
            <li><a href="#" class="footer-link">t-shirts</a></li>
            <li><a href="#" class="footer-link">sweatshirts</a></li>
            <li><a href="#" class="footer-link">shirts</a></li>
            <li><a href="#" class="footer-link">jeans</a></li>
            <li><a href="#" class="footer-link">trousers</a></li>
            <li><a href="#" class="footer-link">shoes</a></li>
            <li><a href="#" class="footer-link">casuals</a></li>
            <li><a href="#" class="footer-link">formals</a></li>
            <li><a href="#" class="footer-link">sports</a></li>
            <li><a href="#" class="footer-link">watch</a></li>
          </ul>
    
          <ul class="category">
            <li class="category-title">women</li>
            <li><a href="#" class="footer-link">t-shirts</a></li>
            <li><a href="#" class="footer-link">sweatshirts</a></li>
            <li><a href="#" class="footer-link">shirts</a></li>
            <li><a href="#" class="footer-link">jeans</a></li>
            <li><a href="#" class="footer-link">trousers</a></li>
            <li><a href="#" class="footer-link">shoes</a></li>
            <li><a href="#" class="footer-link">casuals</a></li>
            <li><a href="#" class="footer-link">formals</a></li>
            <li><a href="#" class="footer-link">sports</a></li>
            <li><a href="#" class="footer-link">watch</a></li>
          </ul>
        </div>
      </div>
    
      <p class="footer-title">about company</p>
      <p class="info">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci in
        ex, quas ea autem illum odit? Libero sapiente ex in consectetur aut
        iure, ut sit distinctio, quibusdam, placeat consequuntur assumenda
        deserunt totam. Eveniet vero assumenda laborum commodi blanditiis
        explicabo sit, tenetur id, earum molestias voluptatibus sequi illum
        aspernatur quo ipsam asperiores alias? Ducimus, explicabo ipsam ab ad
        autem perspiciatis beatae, consectetur aliquid delectus eligendi
        nostrum quis ipsum quae natus ex vitae aspernatur voluptatibus eum
        dignissimos. Saepe, mollitia fugiat! At maxime doloremque harum
        laborum aperiam aliquid, iusto neque dicta necessitatibus, est unde
        perspiciatis, amet minus consequatur. Sit recusandae quibusdam
        obcaecati! Asperiores!
      </p>
      <p class="info">support emails - help@clothing.com,
        customersupport@clothing.com
      </p>
      <p class="info">telephone - 180 00 00 001,180 00 00 002</p>
    
      <div class="footer-social-container">
        <div>
          <a href="" class="social-link">terms $ services</a>
          <a href="" class="social-link">privacy page</a>
        </div>
    
        <div>
          <a href="" class="social-link">instagram</a>
          <a href="" class="social-link">facebook</a>
          <a href="" class="social-link">twitter</a>
    
        </div>
      </div>
    
      <p class="footer-credit">Clothing, Best apparels online store</p>`
    }
    
    createFooter();

const  user = document.getElementById("user");
console.log(user);

user.onclick = () =>{
     
}