import React from 'react'

const AboutSection = () => {
  return (
    <section id="about" className="overflow-hidden">
      <div className="max-w-[1222px] mx-auto px-4 sm:px-8 xl:px-0">
        <div className="text-center">
          <span className="hero-subtitle-gradient relative mb-4 font-medium text-sm inline-flex items-center gap-2 py-2 px-6 rounded-full">
            <span className="hero-subtitle-text text-violet-300">
              {" "}
              Know more about our website{" "}
            </span>
          </span>
          <h2 className="text-white mb-4.5 text-2xl font-bold tracking-wide sm:text-4xl xl:text-heading-2">
            Our Features
          </h2>
          <p className="max-w-[714px] mx-auto mb-5 font-medium text-gray-400/90 mt-2.5">
          Unlock endless culinary creativity with our food recipe generator, serving up personalized dishes tailored to your taste preferences and dietary needs
          </p>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="w-full sm:w-1/2 lg:w-1/3">
            <div className="relative rounded-lg group overflow-hidden text-center py-8 sm:py-10 xl:py-15 px-4 lg:px-8 xl:px-13">
              <span className="group-hover:opacity-100 opacity-0 features-bg absolute w-full h-full left-0 top-0 -z-1"></span>
              <h4 className="text-xl font-bold tracking-wide mb-4 text-violet-500 text-left" id="txtab">
                From The Home Page ?
              </h4>
              <ul id="ul" className="list-disc font-medium text-gray-300/80 text-left">
                <li>
                  Discover the 'Today's Pick' section where our website curates a daily selection just for you.
                </li>
                <li>
                  Then you have a 'Category' section that helps you pick from different kinds of varieties of food.
                </li>
                <li>
                  Then you have the 'Most Popular' section helping you pick from the trending foods.
                </li>
                <li>
                  Then you have the 'Veg' section helping you pick from the veg foods.
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/3">
            <div className="group rounded-lg relative overflow-hidden text-center py-8 sm:py-10 xl:py-15 px-4 lg:px-8 xl:px-13">
              <span className="group-hover:opacity-100 opacity-0 features-bg absolute w-full h-full left-0 top-0 -z-1"></span>
              <h4
                className="text-xl font-bold tracking-wide mb-4 text-left text-violet-500"
                id="txtab"
              >
                Other Features ?
              </h4>
              <ul id="ul" className="list-disc font-medium text-gray-300/80 text-left">
                <li>
                  You can search any food item for it's recipe in the search section.
                </li>
                <li>
                  By clicking get recipe or the whole card you will have the ingredient and instruction section and clicking on respective buttons you will get your requirements.
                </li>
                <li>
                  You also have the picture of the food to help you visualize the decorations.
                </li>
                <li>
                  You can also search the foods by ingredients.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <h1 className='text-center text-white text-xl font-semibold'>Thats It About My Website, Explore And Enjoy !!</h1>
      </div>
    </section>
  )
}

export default AboutSection