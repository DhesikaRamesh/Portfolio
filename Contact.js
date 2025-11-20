import ResumeImg from '../assets/resume.jpg';

export default function Contact (){
   return <section id='contact' className='flex flex-col  bg-primary px-5 py-32  text-white'>
    
   <div className='flex  flex-col items-center'>
    <h1 className='text-4xl border-b-4 border-secondary mb-5 w-[140px] font-bold'>Contact</h1> <br/>
    <p className='pb-5'>If you want to discuss more in detail, please Contact.</p>
    <p className='py-2'><span className='font-bold'>Email :</span> dhesikadee@gmail.com</p>
    <p className='py-2'><span className='font-bold'>Phone :</span> +1234567890</p>
    </div>
  

   </section>
}