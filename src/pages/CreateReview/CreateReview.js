import React from 'react';
import { optionsCategory } from '../../helpers/optionsCategory';
import Select from 'react-select';
import { useSelector } from 'react-redux';
import makeAnimated from 'react-select/animated';
import { schemaCreateReviewForm } from '../../helpers/schemasYupForms';
import { useForm, Controller, FormProvider } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { CrDropzonePrevImages } from '../../components/CrDropzonePrevImages/CrDropzonePrevImages';
import { addIDReviewToTheUserDB, newReviewDB, uploadImagesToReviewDB } from '../../firebase/actionsDB';
import { CrUploadPrevImages } from '../../helpers/CrUploadPrevImages';

const animatedComponents = makeAnimated();

export const CreateReview = () => {
  const methods = useForm({
    resolver: yupResolver(schemaCreateReviewForm)
  });
  const { register, handleSubmit, formState: { errors }, control } = methods;

  const { uid, userName } = useSelector(state => state.auth)

  const handleSubmitReview = (data) => {
    const { title, description, category, prevImages } = data;
    const IdNewReviewDB = newReviewDB(userName, title, description, category );
    if(prevImages) {
      const imagesPrevURL = CrUploadPrevImages(prevImages, IdNewReviewDB);
      console.log(imagesPrevURL);
/*       CrUploadPrevImages(prevImages, IdNewReviewDB)
        .then( URLprevImages  => {
          uploadImagesToReviewDB(IdNewReviewDB, URLprevImages);
        })
        .catch( e => console.log(e)) */
    }
    addIDReviewToTheUserDB(uid, IdNewReviewDB);
  }

  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(handleSubmitReview)} className="flex flex-col items-center">
          <div className="grid grid-flow-col grid-cols-2 mt-20 p-3 gap-3">
            <div className="flex flex-col items-center bg-secondary p-3 rounded-md">
              <label htmlFor="c-review__title"><p className="text-tertiary">Título</p></label>
              <input 
                id="c-review__title" 
                type="text"
                {...register("title")}
                className="w-10/12 rounded-md"
              />
              {errors.title && <p className="text-xs text-quinary text-center my-1">{errors.title?.message}</p>}

              <label htmlFor="c-review__desc text-tertiary"><p className="text-tertiary">Descripción</p></label>
              <textarea 
                id="c-review__desc" 
                {...register("description")}
                className="c-review__desc w-10/12 rounded-md resize-none"
              ></textarea>
              {errors.description && <p className="text-xs text-quinary text-center my-1">{errors.description?.message}</p>}

              <label htmlFor="c-review__category text-tertiary"><p className="text-tertiary">Categorías</p></label>
              <div id="c-review__category" className="w-8/12 text-primary">
              <Controller
                name="category"
                control={control}
                render={({ field }) => <Select 
                  {...field} 
                  name="category"
                  components={animatedComponents}
                  isMulti={true}
                  options={optionsCategory}
                />}
              />
              </div>
              {errors.category && <p className="text-xs text-quinary text-center my-1">{errors.category?.message}</p>}
            </div>
            <CrDropzonePrevImages/>
          </div>
          <button className="w-1/3 shadow-xl bg-quaternary hover:text-tertiary text-primary font-bold py-2 px-4 border-b-4 rounded">
            Crear reseña
          </button>
        </form>
      </FormProvider>
    </div>
  )
}