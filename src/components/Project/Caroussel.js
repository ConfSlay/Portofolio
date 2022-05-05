import React from "react";
import Slider from "react-slick";
// react-slick CSS
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// Data service
import ProjectDataService from "../../services/project.service";


export default function Caroussel(props) {

	//props.images -> liste des images

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
    };

    //className="image-discover"
	return (
		<div className="item-discover caroussel-discover">	
			<Slider {...settings}>		
				{/* for image in project.project_images */}

				{props.loaded && props.project.project_images.map((image) => (
					<img 

						src={ProjectDataService.getUploadsFiles+image.project_image_filename}
						key={image.project_image_id}>
					</img>
				))}
	        </Slider>
		</div>

	);
}	


