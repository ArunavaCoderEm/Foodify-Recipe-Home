import React from 'react'
import '../CSS/BodyTV.css'

export default function Category() {
  return (
    <>
      <div className='w-100 h-62 m-auto hero mt-5'>
        <h2 className='text-4xl text-center'>Cuisine Category</h2>
        <div className="mt-7 grid grid-cols-5 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="item p-3 m-auto">
              <div className="cir">
                <img src="https://www.blueosa.com/wp-content/uploads/2020/01/the-best-top-10-indian-dishes.jpg" alt="Indian"/>
              </div>
              <p className='text-white text-center mt-5 bg-opacity-20 bg-sky-300 bg-blur-lg p-1 rounded-md shadow-md'>Indian</p>
            </div>
            <div className="item p-3 m-auto">
              <div className="cir">
                <img src="https://c.ndtvimg.com/2021-04/umk8i7ko_pasta_625x300_01_April_21.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886" alt="Italian"/>  
              </div>
              <p className='text-white text-center mt-5 bg-opacity-20 bg-sky-300 bg-blur-lg p-1 rounded-md shadow-md'>Italian</p>
            </div>
            <div className="item p-3 m-auto">
              <div className="cir">
                <img src="https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/The-10-Most-Popular-Dishes-in-China.jpg" alt="Italian"/>  
              </div>
              <p className='text-white text-center mt-5 bg-opacity-20 bg-sky-300 bg-blur-lg p-1 rounded-md shadow-md'>Chinese</p>
            </div>
            <div className="item p-3 m-auto">
              <div className="cir">
                <img src="https://images.immediate.co.uk/production/volatile/sites/30/2022/10/Pork-carnitas-b94893e.jpg?quality=90&resize=556,505" alt="Italian"/>  
              </div>
              <p className='text-white text-center mt-5 bg-opacity-20 bg-sky-300 bg-blur-lg p-1 rounded-md shadow-md'>Mexican</p>
            </div>
            <div className="item p-3 m-auto">
              <div className="cir">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/57/Oseti.jpg" alt="Italian"/>  
              </div>
              <p className='text-white text-center mt-5 bg-opacity-20 bg-sky-300 bg-blur-lg p-1 rounded-md shadow-md'>Japaneese</p>
            </div>
        </div>


        <div className="catitem mt-7 grid grid-cols-5">
            <div className="item p-3 m-auto">
              <div className="cir1">
                <img src="https://media.istockphoto.com/id/589415708/photo/fresh-fruits-and-vegetables.jpg?s=612x612&w=0&k=20&c=aBFGUU-98pnoht73co8r2TZIKF3MDtBBu9KSxtxK_C0=" alt="veg"/>
              </div>
              <p className='text-white text-center mt-5 bg-opacity-20 bg-amber-300 bg-blur-lg p-1 rounded-md shadow-md'>Veg</p>
            </div>
            <div className="item p-3 m-auto">
              <div className="cir1">
                <img src="https://t4.ftcdn.net/jpg/01/87/57/33/360_F_187573358_rIkruVJ7wUCA8FYxonKMkLOK0WaE9bQq.jpg" alt="Non veg"/>  
              </div>
              <p className='text-white text-center mt-5 bg-opacity-20 bg-amber-300 bg-blur-lg p-1 rounded-md shadow-md'>Non Veg</p>
            </div>
            <div className="item p-3 m-auto">
              <div className="cir1">
                <img src="https://www.austriajuice.com/hubfs/Beverage_compounds_drinks.jpg#keepProtocol" alt="beverage"/>  
              </div>
              <p className='text-white text-center mt-5 bg-opacity-20 bg-amber-300 bg-blur-lg p-1 rounded-md shadow-md'>Beverage</p>
            </div>
            <div className="item p-3 m-auto">
              <div className="cir1">
                <img src="https://media.istockphoto.com/id/1263686908/photo/mixed-salty-snack-flat-lay-table-scene-on-a-wood-background.jpg?s=612x612&w=0&k=20&c=rCZ-gpvz--NpeNA0cYGCyJj3EK0kFUSkvdsow9u4I3o=" alt="snack"/>  
              </div>
              <p className='text-white text-center mt-5 bg-opacity-20 bg-amber-300 bg-blur-lg p-1 rounded-md shadow-md'>Snacks</p>
            </div>
            <div className="item p-3 m-auto">
              <div className="cir1">
                <img src="https://media.istockphoto.com/id/1054228718/photo/indian-sweets-in-a-plate-includes-gulab-jamun-rasgulla-kaju-katli-morichoor-bundi-laddu.jpg?s=612x612&w=0&k=20&c=hYWCXLaldKvhxdBa83M0RnUij7BCmhf-ywWdvyIXR40=" alt="Sweet"/>  
              </div>
              <p className='text-white text-center mt-5 bg-opacity-20 bg-amber-300 bg-blur-lg p-1 rounded-md shadow-md'>Sweet</p>
            </div>
        </div>
      </div>
    </>
  )
}
