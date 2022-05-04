import React, { useState, useEffect } from 'react';
//Assets
import deleteLogo from "../../image/delete.png";

export default function FileInput(props) {

	const [valid, setValid] = useState(props.isValid);
	const [removable, setRemovable] = useState(props.isRemovable);

	return (		
		<>
		{ props.isRemovable === false ?

			<div className="item-form">
            	<div className="label-form">{props.labelName}</div>

            	{ props.isMultiFile === true ?

            		<input 
	            		type='file' 
	            		multiple 
	            		name={props.fieldName}             		 
	            		className='files-form'
	            		onChange={props.onChangeEvent}>
            		</input>

				:

				    <input 
						type='file' 
						name={props.fieldName} 
						className='files-form'
						onChange={props.onChangeEvent}>
		            </input>
				}


	            { props.isValid === false ?

	            	<div className="errorMessage">{props.validationMessage}</div>
	            : 
	            	null 
	            }
	         </div>

		:	
			<div className="item-form">
            	<div className="label-form">{props.labelName}</div>
            	<div className="file-box">
              		<img src={deleteLogo} className="icon-delete" onClick={props.onResetEvent}></img>

              		{ props.isMultiFile === true ?

              			<div className="file-name">
              			
	              		{ props.fieldValue.map((image) => (
	                  		<div key={image.project_image_id}>{image.project_image_filename}</div>             
	                	))}

	                	</div>
	                :

              			<div className="file-name">{props.fieldValue}</div>
              		}

            	</div>
          	</div> 

		}
		</>
	);
}