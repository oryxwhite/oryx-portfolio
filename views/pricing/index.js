const monthly = document.querySelectorAll('.amount');
const yearly = document.querySelectorAll('.yearly-amount');
const professional_monthly = document.querySelector('.professional-amount')
const professional_yearly = document.querySelector('.yearly-amount-professional')
const checkbox = document.getElementById('checkbox')

checkbox.addEventListener('click', ()=> {
    monthly.forEach(price => {
        price.style.display !== 'none' ? price.style.display = 'none' : price.style.display = 'flex'
    })

    yearly.forEach(pricey => {
        pricey.style.display !== 'flex' ? pricey.style.display = 'flex' : pricey.style.display = 'none'
    })

    professional_monthly.style.display !== 'none' ? professional_monthly.style.display = 'none' : professional_monthly.style.display = 'flex'
    professional_yearly.style.display != 'flex' ? professional_yearly.style.display = 'flex' : professional_yearly.style.display = "none"
})