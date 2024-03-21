import saleimage from '../assets/images/images/sale-image.jpg'

function SaleImage(){
    return(
        <div class="sale-image">
        <img src={saleimage} alt="" />
        <div class="sale-image__offer">
            <h2>Udemy Flash Sale 24 hours to save</h2>
            <p>Get the top courses for just 499. Just one day to save.</p>
        </div>
    </div>
    )
}

export default SaleImage