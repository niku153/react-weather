export default function Rainfall(props) {
  if (props.rainfall !== undefined) {
    return `${props.rainfall["1h"]}mm`;
  } else {
    return "0mm";
  }
}
