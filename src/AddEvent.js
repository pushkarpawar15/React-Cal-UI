import React from 'react'

export default function AddEvent(props) {
  return (
    <div className="md:py-8 py-5 md:px-16 px-5 dark:bg-white bg-gray-50 rounded-b mt-16">
	    <h1 class=" text-2xl p-2">New Event</h1>
	    <hr/>
	<form class="w-full max-w-lg">
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3 mb-6 md:mb-0">
      <input class="appearance-none block w-full bg-white text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Add Title"/>
      Other Inputs are not added yet.
    </div>
    </div>
</form>
    <div class="w-full flex justify-center">
				<button onClick={props.onClick} class="bg-orange-400 w-1/3 p-1 rounded-xl">Close</button>
		</div>
    </div>
  )
}
