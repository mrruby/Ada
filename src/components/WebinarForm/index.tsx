import React from "react"
import formHTML from "../../values/forms/form.html"

const WebinarForm = () => {
  return (
    <div
      className="px-2 xl:px-6 flex-col items-center pt-10 md:pt-20 pb-[80px] md:pb-[160px]"
      id="webinar-form"
    >
      <div className="form-scale">
        <div dangerouslySetInnerHTML={{ __html: formHTML }} />
      </div>
    </div>
  )
}

export default WebinarForm
