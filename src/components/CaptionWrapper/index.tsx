import styles from "./CaptionWrapper.module.css";


// https://docusaurus.io/feature-requests/p/image-captions
export default function CaptionWrapper(props) {
  return (
    <figure>
      {props.children}
      <figcaption className={styles.figcaption}>{props.caption}</figcaption>
    </figure>
  );
}