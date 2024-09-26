'use client';

import { Card, CardContent, Typography } from '@mui/material';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import LabelIcon from '@icons/label.svg';
import { iconVariants, inVariants, outVariants } from './motion';
import styles from './plans.css';

interface ICustomCard {
  variant: 'primary' | 'secondary';
  subTitle: string;
  subContent: string;
  benefits: string[];
  price: string;
  dateCycleUnit?: 'month' | 'year';
}

function CustomCard({
  variant,
  subTitle,
  subContent,
  benefits,
  price,
  dateCycleUnit,
}: ICustomCard) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={outVariants}
    >
      <Card className={clsx(styles.card, styles[variant] as string)}>
        {variant === 'primary' && (
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={styles.labelIcon}
            variants={iconVariants}
          >
            <LabelIcon />
          </motion.div>
        )}
        <CardContent className={styles.cardContent}>
          <Typography className={styles.subTitle} variant="subtitle1">
            {subTitle}
          </Typography>
          <Typography className={styles.subContent} variant="body1">
            {subContent}
          </Typography>
          <Typography
            className={clsx(styles.price, {
              [styles.bright]: variant === 'primary',
            })}
            variant="h3"
          >
            {price}
            <span>{dateCycleUnit && ` / ${dateCycleUnit}`}</span>
          </Typography>
          <ul className={styles.benefitList}>
            {benefits.map(benefit => (
              <motion.li
                key={benefit}
                className={styles.benefit}
                variants={inVariants}
              >
                <motion.svg className={styles.checkIcon}>
                  <motion.path
                    d="M10.319.768l1.363 1.464-7.128 6.634L.319 4.924 1.682 3.46l2.871 2.674z"
                    width={12}
                    height={9}
                    fill={variant === 'primary' ? '#CDF348' : '#243847'}
                  />
                </motion.svg>
                <Typography className={styles.benefitContent} variant="body1">
                  {benefit}
                </Typography>
              </motion.li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function Plans() {
  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Our pricing plans</h2>
      <div className={styles.cardWrapper}>
        <CustomCard
          variant="secondary"
          subTitle="Dip your toe"
          subContent="Just getting started? No problem at all! Our free plan will take you a long way."
          price="Free"
          benefits={[
            'Unlimited products',
            'Basic analytics',
            'Limited marketplace exposure',
            '10% fee per transaction',
          ]}
        />
        <CustomCard
          variant="primary"
          subTitle="Dive right in"
          subContent="Ready for the big time? Our paid plan will help you take your business to the next level."
          price="$25.00"
          dateCycleUnit="month"
          benefits={[
            'Custom domain',
            'Advanced analytics and reports',
            'High marketplace visibility',
            '5% fee per transaction',
          ]}
        />
      </div>
    </section>
  );
}
