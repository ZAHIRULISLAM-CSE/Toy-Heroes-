import React from "react";

const Banner = () => {
  return (
    <div className="bg-dark">
      <div id="default-carousel" class="relative w-full" data-carousel="slide">
        <div class="relative h-56 overflow-hidden  md:h-[70vh]">
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://img.freepik.com/free-vector/cosmonaut-takeoff-flame-space-game-background_107791-19555.jpg?w=996&t=st=1684360905~exp=1684361505~hmac=0cb45d8d5a5dfe9cef34082ce98d04d1c97f18b7472e89e19778a7348ab3d672"
              class="absolute block h-full w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>

          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://img.freepik.com/free-vector/cute-giraffe-super-hero-cartoon-vector-icon-illustration-animal-holiday-icon-concept-isolated-flat_138676-6895.jpg?size=626&ext=jpg&uid=R62355203&ga=GA1.2.1436202133.1673093708&semt=ais"
              class="absolute block h-full w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://img.freepik.com/free-vector/girl-super-hero-flying-sky_1308-26175.jpg?size=626&ext=jpg&uid=R62355203&ga=GA1.2.1436202133.1673093708&semt=ais"
              class="absolute block h-full w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://img.freepik.com/free-vector/superheroes-outer-space_1308-25196.jpg?w=740&t=st=1684363873~exp=1684364473~hmac=b24461f9f05c74c9d5fecf908e6562b29c18b1e95275a1b71ff425a1c93bb264"
              class="absolute block h-full w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>

          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://img.freepik.com/free-vector/super-hero-shield-character_603843-512.jpg?size=626&ext=jpg&uid=R62355203&ga=GA1.2.1436202133.1673093708&semt=ais"
              class="absolute block h-full w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
        </div>
        {/* <!-- Slider indicators --> */}
        <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 4"
            data-carousel-slide-to="3"
          ></button>
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 5"
            data-carousel-slide-to="4"
          ></button>
        </div>
        <button
          type="button"
          class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            <span class="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
            <span class="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
