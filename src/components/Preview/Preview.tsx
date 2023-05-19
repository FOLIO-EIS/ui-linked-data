import { useRecoilValue } from "recoil"
import state from "../../state/state"

export const Preview = () => {
  const profiles = useRecoilValue(state.config.profiles)
  const userValues = useRecoilValue(state.config.userValues)
  const generateJsonFor = (propertyTemplates: PropertyTemplate[]) => {
      const labels = userValues.map(uv => uv.field);
      return propertyTemplates.reduce((arr, val) => {
        const v = {...val}
        if (labels.includes(val.propertyLabel)){
          v.userValue = {
            '@type': v.propertyURI,
            '@value':  userValues.find(uv => uv.field === val.propertyLabel)?.value
          }
        }

        arr.push(v)
        return arr
      }, [])
  }

  const generateJson = () => {
    const profile = profiles
    .find((i) => i.name === "BIBFRAME 2.0 Monograph")
      .json["Profile"]

    const workJson = generateJsonFor(profile.resourceTemplates[0].propertyTemplates)
    const instanceJson = generateJsonFor(profile.resourceTemplates[1].propertyTemplates)

    const newJson = JSON.stringify([workJson, instanceJson])
    console.log(newJson)

    return
  }

  return (
    <div style={{
      minWidth: '15em'
    }}>
      <div>Preview pane</div>
      {
        userValues.map(val => Boolean(val.value) && <div>
          <div>{val.field}</div>
          <strong>{val.value}</strong>
        </div>)
      }
      <br />
      <button onClick={generateJson}>Generate</button>
    </div>
  )
}