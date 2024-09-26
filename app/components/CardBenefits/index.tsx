'use client';

import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import ResponsiveIcon from '@icons/anywhere.svg';
import AtOnceIcon from '@icons/at-once.svg';
import ClipIcon from '@icons/clip.svg';
import FastIcon from '@icons/fast.svg';
import MoneyIcon from '@icons/money.svg';
import styles from './cardBenefits.css';
import { outVariants, inVariants } from './motion';

interface ICustomCard {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  content: string;
  className?: string;
}

function CustomCard({ className, Icon, title, content }: ICustomCard) {
  return (
    <motion.div className={className} variants={inVariants}>
      <div className={styles.top}>
        <ClipIcon className={styles.clip} />
      </div>
      <Card className={styles.card}>
        <CardMedia className={styles.cardMedia}>
          <Icon />
        </CardMedia>
        <CardContent className={styles.cardContent}>
          <Typography className={styles.typographyTitle} variant="h3">
            {title}
          </Typography>
          <Typography className={styles.typographyContent} variant="body1">
            {content}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function CardBenefits() {
  return (
    <motion.div
      className={styles.container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={outVariants}
    >
      <CustomCard
        className={styles.item}
        Icon={FastIcon}
        title={'신속 및 간단'}
        content={`1분만에 뚝딱 만들어지는 가장 빠른 견적서`}
      />
      <CustomCard
        className={styles.item}
        Icon={AtOnceIcon}
        title={'한방에'}
        content={`PDF 파일 내려받기 부터, 이메일, 링크 공유까지 한번에!`}
      />
      <CustomCard
        className={styles.item}
        Icon={MoneyIcon}
        title={'무료'}
        content={`로그인 없이 사용 가능한 서비스`}
      />
      <CustomCard
        className={styles.item}
        Icon={ResponsiveIcon}
        title={'어디서든지'}
        content={`브라우저 기반, 모든 플랫폼에서 동작`}
      />
    </motion.div>
  );
}
