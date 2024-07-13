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
  const elementTypesSet = new Set(elementTypes);

  useEffect(() => {
    const handleClick = (event) => {
      try {
        const target = event.target;

        if (
          elementTypesSet.has(target.tagName.toLowerCase()) &&
          target.hasAttribute(primaryAttribute)
        ) {
          const primaryValue = target.getAttribute(primaryAttribute);
          const secondaryValue = target.getAttribute(secondaryAttribute);
          const actionString = secondaryValue
            ? `${secondaryValue}_clicked`
            : "";

          if (target.hasAttribute("data-extra-params")) {
            const extraParams = JSON.parse(target.dataset.extraParams);
            callback(primaryValue, actionString, extraParams);

            if (removeExtraParamsAfterAdding) {
              target.removeAttribute("data-extra-params");
              console.log(
                "Removed data-extra-params attribute from target element"
              );
            }
          } else {
            callback(primaryValue, actionString);
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
      if (typeof parentSelector !== "string") {
        // Handle invalid selector type, fallback to document
        console.error("Invalid parentSelector type:", parentSelector);
        parentElement = document;
      } else {
        parentElement = document.querySelector(parentSelector);
        if (!parentElement) {
          console.error(
            "No parent element found for selector:",
            parentSelector
          );
          parentElement = document;
        }
      }
    }

    parentElement.addEventListener("click", handleClick);

    return () => {
      parentElement.removeEventListener("click", handleClick);
    };
  }, []);
}

export default useCustomEventListener;
