import React, { useState, useEffect } from 'react';
//Components
import TextInput from "../Form/TextInput"
import FileInput from "../Form/FileInput"

//Assets
import deleteLogo from "../../image/delete.png";

export default function FormProject(props) {

  const [project,setProject] = useState(props.project);
  const [removeThumbnailPossibility,setRemoveThumbnailPossibility] = useState(props.removeThumbnailPossibility);
  const [removeImagesPossibility, setRemoveImagesPossibility] = useState(props.removeImagesPossibility);
  const [removeReleaseFilePossibility,setRemoveReleaseFilePossibility] = useState(props.removeReleaseFilePossibility);

//-------------------------------- JSX -----------------------------------------
  return (
    <div className="wrapper-form">
      <div className="box-form">
     
        {/*----------------------------------------- Name Field ------------------------------------------*/}
        <TextInput 
          multiline = {false}
          small = {true}
          labelName="Project Name"
          fieldName="project_name"
          fieldValue={props.project.project_name}
          onChangeEvent={props.onChangeProject_name}
          isValid={props.nameValidation.isValid}
          validationMessage={props.nameValidation.message}>
        </TextInput>

      {/*----------------------------------------- Technologies Field ----------------------------------------*/}
        <TextInput 
          multiline = {false}
          small = {false}
          labelName="Source and target technologies"
          fieldName="project_technologies"
          fieldValue={props.project.project_technologies}
          onChangeEvent={props.onChangeProject_technologies}
          isValid={props.technologiesValidation.isValid}
          validationMessage={props.technologiesValidation.message}>
        </TextInput>

      {/*----------------------------------------- Description Field ----------------------------------------*/}         
        <TextInput 
          multiline = {true}
          small = {false}
          labelName="Description"
          fieldName="project_description"
          fieldValue={props.project.project_description}
          onChangeEvent={props.onChangeProject_description}
          isValid={props.descriptionValidation.isValid}
          validationMessage={props.descriptionValidation.message}>
        </TextInput>

      {/*----------------------------------------- Thumbnail Field ----------------------------------------*/}
        <FileInput 
          isMultiFile={false}
          labelName="Thumbnail"
          fieldName="project_thumbnail_filename"
          onChangeEvent={props.onChangeProject_thumbnail_filename}
          isValid={props.thumbnailValidation.isValid}
          validationMessage={props.thumbnailValidation.message}
          isRemovable={props.removeThumbnailPossibility}
          onResetEvent={props.onResetProject_thumbnail_filename}
          fieldValue={props.project.project_thumbnail_filename}>
        </FileInput>
       
      {/*--------------------------------------------- Images Field--------------------------------------*/}
          <FileInput 
            isMultiFile={true}
            labelName="Images"
            fieldName="project_images"
            onChangeEvent={props.onChangeProject_images}
            isValid={props.imagesValidation.isValid}
            validationMessage={props.imagesValidation.message}
            isRemovable={props.removeImagesPossibility}
            onResetEvent={props.onResetProject_images}
            fieldValue={props.project.project_images}>
          </FileInput>

      {/*--------------------------------------- Format Select------------------------------------------------*/}
        <div className="item-form">
          <div className="label-form">Format</div>
          <select 
            className='FormatChoice_JS'
            id="project_is_file_format"  
            value={props.project.project_is_file_format} 
            onChange={props.onChangeProject_is_file_format} 
            name="project_is_file_format">
              <option value="true">File</option>
              <option value="false">Link</option>
          </select>
        </div>    

      {/*----------------------------------------- Release Field (URL OR FILE)----------------------------------------------*/}
        { props.project.project_is_file_format === true ?

          <FileInput 
            isMultiFile={false}
            labelName="Release File"
            fieldName="project_release_filename"
            onChangeEvent={props.onChangeProject_release_filename}
            isValid={props.releaseFileValidation.isValid}
            validationMessage={props.releaseFileValidation.message}
            isRemovable={props.removeReleaseFilePossibility}
            onResetEvent={props.onResetProject_release_filename}
            fieldValue={props.project.project_release_filename}>
          </FileInput>

        :

          <TextInput 
            multiline = {false}
            small = {false}
            labelName="Link"
            fieldName="project_release_url"
            fieldValue={props.project.project_release_url} 
            onChangeEvent={props.onChangeProject_release_url}
            isValid={props.releaseUrlValidation.isValid}
            validationMessage={props.releaseUrlValidation.message}>
          </TextInput>
        }

      {/*----------------------------------------- Button Submit----------------------------------------*/}
        { props.mode === "create" ?
          <button className="item-form button-form" onClick={props.saveProject}>Create Project</button>
        :
          <button className="item-form button-form" onClick={props.saveProject}>Update Project</button>
        } 

      </div>
  </div>
  );
}