import React from "react"
import formMetaAdsMasters from "../../values/forms/form-meta-ads-masters.html"
import formOgarnijSwojeAdsy from "../../values/forms/form-ogarnij-swoje-adsy.html"

const MentoringForm = ({ version }: { version: number }) => {
  return (
    <>
      {version === 1 && (
        <div
          className="px-2 xl:px-6 flex-col items-center pt-10 md:pt-20 pb-[120px]"
          id="webinar-form"
        >
          <div className="form-scale">
            <div dangerouslySetInnerHTML={{ __html: formMetaAdsMasters }} />
          </div>
        </div>
      )}
      {version === 2 && (
        <div
          className="px-2 xl:px-6 flex-col items-center pt-10 md:pt-20 pb-[120px]"
          id="webinar-form"
        >
          <div className="form-scale">
            <div dangerouslySetInnerHTML={{ __html: formOgarnijSwojeAdsy }} />
          </div>
        </div>
      )}
    </>
  )
}

export default MentoringForm
