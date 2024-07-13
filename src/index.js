// useCustomEventListener.js
import { useEffect } from "react";

function useCustomEventListener({
  parentSelector,
  elementTypes,
  primaryAttribute,
  callback,
  secondaryAttribute,
  onError,
  removeExtraParamsAfterAdding,
}) {
  useEffect(() => {
    const handleClick = (event) => {
      try {
        const target = event.target;
        if (
          elementTypes.includes(target.tagName.toLowerCase()) &&
          target.hasAttribute(primaryAttribute)
        ) {
          const primaryValue = target.getAttribute(primaryAttribute);
          const secondaryValue = target.getAttribute(secondaryAttribute) || "";
          const actionString = `${secondaryValue}_clicked`;

          const extraParams = target.dataset.extraParams
            ? JSON.parse(target.dataset.extraParams)
            : {};
          callback(primaryValue, actionString, extraParams);

          if (removeExtraParamsAfterAdding && target.dataset.extraParams) {
            delete target.dataset.extraParams;
          }
        }
      } catch (error) {
        if (onError) {
          onError(error);
        } else {
          console.error("Error in event listener:", error);
        }
      }
    };

    let parentElement = document;

    if (parentSelector) {
      parentElement = document.querySelector(parentSelector);

      if (!parentElement) {
        const error = new Error(
          `No parent element found for selector: ${parentSelector}`
        );
        if (onError) {
          onError(error);
        } else {
          console.error(error.message);
        }
        parentElement = document;
      }
    }

    parentElement.addEventListener("click", handleClick);

    return () => {
      parentElement.removeEventListener("click", handleClick);
    };
  }, [
    parentSelector,
    elementTypes,
    primaryAttribute,
    callback,
    secondaryAttribute,
    onError,
    removeExtraParamsAfterAdding,
  ]);
}

export default useCustomEventListener;
