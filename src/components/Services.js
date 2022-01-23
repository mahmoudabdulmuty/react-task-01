import { BsGem, BsGlobe, BsHeart, BsLaptop } from 'react-icons/bs';
import './Services.css';

function Services() {
	return (
		<section className="services">
			<div className="container">
				<h2 className="title">At Your Service</h2>
			</div>  
			<div className="grid--4-cols">
				<div className="feature">
					<BsGem className="feature-icon" />
					<h3 className="feature-title">Sturdy Themes</h3>
					<p className="feature-text">
						Our themes are updated regularly to keep them bug free!
					</p>
				</div>
				<div className="feature">
					<BsLaptop className="feature-icon" />
					<h3 className="feature-title">Up to Date</h3>
					<p className="feature-text">
						All dependencies are kept current to keep things fresh.
					</p>
				</div>
				<div className="feature">
					<BsGlobe className="feature-icon" />
					<h3 className="feature-title">Ready to Publish</h3>
					<p className="feature-text">
						You can use this design as is, or you can make changes!
					</p>
				</div>
				<div className="feature">
					<BsHeart className="feature-icon" />
					<h3 className="feature-title">Made with Love</h3>
					<p className="feature-text">
						Is it really open source if it's not made with love?
					</p>
				</div>
			</div>
		</section>
	);
}

export default Services;
