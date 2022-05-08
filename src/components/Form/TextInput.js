import React, { useState, useEffect } from 'react';

export default function TextInput(props) {

	const [valid, setValid] = useState(props.isValid);

	return (
		<div className="item-form">
			<div className="label-form">{props.labelName}</div>

			{/* le champ peut etre multiline ou single-line, et si single-line, small ou normal */}

			{ props.multiline === true ?

		    <textarea
				className="textArea-form" 
				id={props.fieldName}
				value={props.fieldValue} 
				onChange={props.onChangeEvent} 
				name={props.fieldName}>
        	</textarea> 

			: 
				<>
				{ props.small === true ?
					<input 
						type="text"
						className="textFields-form small" 
						id={props.fieldName} 
						value={props.fieldValue} 
						onChange={props.onChangeEvent} 
						name={props.fieldName}
					/>
				:
					<input 
						type="text"
						className="textFields-form" 
						id={props.fieldName} 
						value={props.fieldValue} 
						onChange={props.onChangeEvent} 
						name={props.fieldName}
	      			/>			
				}
				</>

			}

      { props.isValid === false ?
      	<div className="errorMessage">{props.validationMessage}</div>
      : null }

		</div> 
 	);
}
