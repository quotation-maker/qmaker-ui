'use client';

import { motion } from 'framer-motion';
import styles from './introduce.css';
import { transition, variants } from './motion';

export default function Introduce() {
  return (
    <section className={styles.introduce}>
      <span className={styles.rightNow}>지금 바로!</span>
      <h2 className={styles.heading2}>
        손쉽게
        <span className={styles.highlightColor}> 견적서</span>를 만들고{'\n'}
        공유하세요.
      </h2>
      <motion.svg aria-hidden className={styles.drawing} viewBox="0 0 820 840">
        <motion.desc>Licensed under CC BY 4.0</motion.desc>
        <motion.path
          d="M421.427 645.037C421.447 631.837 421.935 593.997 415.375 569.937C408.795 545.877 387.436 518.357 382.028 500.697C376.62 483.037 377.284 469.077 382.907 463.977C388.529 458.877 408.151 461.817 415.707 470.117C423.282 478.417 428.241 506.617 428.319 513.797C428.397 520.997 419.729 518.917 416.234 513.257C412.719 507.597 405.496 493.957 407.292 479.857C409.069 465.737 418.987 435.077 426.913 428.557C434.84 422.037 451.123 429.157 454.832 440.757C458.522 452.357 456.648 467.457 449.112 498.137C441.556 528.817 415.062 600.197 409.557 624.797C404.07 649.397 415.219 642.037 416.136 645.737M417.386 647.037C417.561 634.657 423.848 597.457 417.132 573.657C410.435 549.857 383.004 522.817 377.128 504.257C371.251 485.677 376.112 468.057 381.891 462.257C387.67 456.477 404.5 460.737 411.802 469.497C419.084 478.257 425.234 507.077 425.683 514.837C426.113 522.577 417.132 521.637 414.438 515.997C411.763 510.357 406.94 495.037 409.557 480.957C412.192 466.877 422.716 438.177 430.174 431.537C437.651 424.917 451.259 430.377 454.383 441.197C457.507 451.997 456.101 465.597 448.917 496.357C441.732 527.097 416.683 600.557 411.255 625.697C405.847 650.837 415.492 643.617 416.429 647.197L417.386 647.037Z"
          fill="none"
          stroke="#854DFF"
          strokeWidth="8"
          initial="hidden"
          animate="show"
          variants={variants}
          transition={transition}
        />
        <motion.path
          d="M378.311 689.421C389.108 686.321 430.869 672.681 441.627 672.601C452.365 672.521 454.688 689.721 442.779 688.961C430.889 688.201 369.623 674.481 370.228 668.041C370.833 661.601 434.852 649.301 446.429 650.361C458.007 651.421 452.013 674.321 439.674 674.381C427.355 674.461 369.955 655.861 372.454 650.741C374.953 645.601 453.478 644.461 454.708 643.621C455.938 642.781 393.442 652.921 379.873 645.681C366.304 638.421 384.227 618.001 373.313 600.121C362.379 582.221 329.345 563.921 314.292 538.361C299.22 512.821 285.339 477.161 282.937 446.781C280.516 416.401 289.36 380.001 299.825 356.081C310.309 332.141 325.616 315.501 345.745 303.201C365.855 290.921 396.039 282.521 420.56 282.341C445.063 282.141 472.338 287.781 492.818 302.061C513.279 316.341 532.354 341.481 543.346 368.041C554.318 394.601 561.386 432.761 558.711 461.461C556.036 490.161 544.068 515.961 527.336 540.261C510.604 564.561 470.034 590.101 458.319 607.241C446.605 624.381 457.031 637.101 457.089 643.101M374.933 690.961C386.081 687.461 432.177 669.061 443.716 669.421C455.274 669.781 456.406 692.681 444.204 693.101C432.001 693.541 369.74 679.201 370.501 672.021C371.263 664.861 437.624 649.301 448.753 650.081C459.881 650.841 450.198 676.241 437.273 676.621C424.368 677.001 368.159 657.761 371.302 652.381C374.465 647.001 455.352 646.141 456.172 644.341C457.011 642.541 390.318 648.741 376.261 641.541C362.204 634.361 382.059 618.841 371.809 601.241C361.54 583.641 330.185 561.501 314.722 535.921C299.239 510.361 281.707 477.521 278.974 447.821C276.24 418.121 286.842 381.841 298.322 357.781C309.802 333.701 327.51 315.821 347.873 303.401C368.217 290.981 396.585 282.801 420.404 283.281C444.223 283.741 469.839 292.181 490.768 306.201C511.717 320.201 535.321 341.721 546.059 367.361C556.798 393.001 558.984 431.441 555.197 460.001C551.409 488.581 538.679 514.801 523.373 538.821C508.047 562.841 475.012 586.361 463.318 604.101C451.603 621.841 454.18 638.341 453.126 645.261L374.933 690.961Z"
          fill="none"
          stroke="#000000"
          strokeWidth="8"
        />
        <motion.path
          d="M583.924 402.402C595.931 397.362 646.049 378.062 657.86 373.622M586.696 403.982C597.903 399.562 641.812 381.782 653.331 376.722L586.696 403.982Z"
          fill="none"
          stroke="#000000"
          strokeWidth="8"
          initial="hidden"
          animate="show"
          variants={variants}
          transition={transition}
        />
        <motion.path
          d="M490.948 277.113C497.046 255.693 520.228 170.657 525.618 149.417M487.313 277.665C493.689 256.035 520.853 168.696 527.197 147.001L487.313 277.665Z"
          fill="none"
          stroke="#000000"
          strokeWidth="8"
          initial="hidden"
          animate="show"
          variants={variants}
          transition={transition}
        />
        <motion.path
          d="M306.651 291.441C299.349 285.801 269.263 264.021 262.02 257.681M308.955 294.041C301.907 286.981 271.606 260.921 264.226 254.761L308.955 294.041Z"
          fill="none"
          stroke="#000000"
          strokeWidth="8"
          initial="hidden"
          animate="show"
          variants={variants}
          transition={transition}
        />
        <motion.path
          d="M255.938 426.79C240.768 424.164 178.241 414.205 163.026 412.484M251.694 428.353C236.861 426.351 178.752 418.343 164.453 415.963L251.694 428.353Z"
          fill="none"
          stroke="#000000"
          strokeWidth="8"
          initial="hidden"
          animate="show"
          variants={variants}
          transition={transition}
        />
      </motion.svg>
    </section>
  );
}
