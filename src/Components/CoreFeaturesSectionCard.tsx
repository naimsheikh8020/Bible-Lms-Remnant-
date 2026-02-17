import type { CoreFeaturesCardComponentProps } from '../types/CoreFeaturessCardComponentProps';
const CoreFeaturesSectionCard = ({title, description, img}: CoreFeaturesCardComponentProps) => {
  return (
    <div>
      <div>
        <img src={img} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default CoreFeaturesSectionCard