import React from "react"
import formHTML from "../../values/forms/form-wakacje.html"

const WakacjeForm = () => {
  return (
    <div
      className="px-2 xl:px-6 flex-col items-center pt-10 md:pt-20 pb-[120px]"
      id="webinar-form"
    >
      <div className="form-scale">
        <div dangerouslySetInnerHTML={{ __html: formHTML }} />
      </div>
    </div>
  )
}

export default WakacjeForm
