import Headings from './Headings'
import { benefits } from '../constants'
const Benifits = () => {
    return (
        <section>


            <div className='container relative z-2'>
                <Headings className="md:max-w-md lg:max-w-2xl" title="Chat Smarter,Not Harder with Brainwave" />
            </div>
            <div className='flex flex-wrap gap-10 mb-10 justify-center'>
                {benefits.map((data) => {
                    return (
                        <div className='block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] ' style={{ backgroundImage: `url(${data.backgroundUrl})` }} key={data.id}>
                            <div className='relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none'>
                                <h5 className='h5 mb-5'>{data.title}</h5>
                                <p className='body-2 mb-6 text-n-3'>{data.text}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Benifits