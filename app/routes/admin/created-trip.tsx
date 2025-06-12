import { ComboBoxComponent } from '@syncfusion/ej2-react-dropdowns'
import Header from 'components/Header'
import React from 'react'

const CreatedTrip = () => {
    const handleSubmit = async () =>{
        console.log("submited form")
    }
  return (
    <main className='flex flex-col gap-10 pb-20 wrapper'>
        <Header title='Add a New Trip' description='view and edit AI-generated travel plans' />
        <section className='mt-2.5 wrapper-md'>
            <form className='trip-form' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="country">
                        Country
                    </label>
                    <ComboBoxComponent id='country' dataSource={['title1','title']}  />
                </div>
            </form>
        </section>
    </main> 
  )
}

export default CreatedTrip