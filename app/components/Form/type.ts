export type FunnelState = {
  writer: WriterProps;
  item: ItemProps;
  receiver: ReceiverProps;
  etc: EtcProps;
};

// 1. 작성자(공급자) 정보 입력 : writer
// 발행인 이름 *
// 사업자명
// 대표자
// 사업자등록번호 : 번호와 '-'만 입력 가능
// 사업장주소 : 주소 찾기 모달
// 연락처 (전화번호) : 번호와 '-'만 입력 가능
// 연락처 (이메일) : 이메일 형식
// 공급자 직인 (png) or canvas로 입력받기

export interface WriterProps {
  writerName?: string;
  company?: string;
  ceo?: string;
  registrationNumber?: string;
  address?: string;
  phoneNumber?: string;
  email?: string;
  seal?: File | unknown;
}

// 2. 견적 품목 정보 입력 : item
// 품목 (require)
// 개수 (require)
// 가격 (require)
// 규격
export interface Item {
  itemname?: string;
  quantity?: number;
  price?: number;
  specification?: string;
}

export interface ItemProps {
  items?: Array<Item>;
}

// 3. 수신자 정보 입력 : receiver
// 수신인 이름 *
// 수신인 연락처
// 수신인 이메일
export interface ReceiverProps {
  receiverName?: string;
  receiverPhoneNumber?: string;
  receiverEmail?: string;
}

// 4. 기타 사항 입력 : etc
// 견적일 : datePicker
// 견적 유효기간 : 견적일로부터 _일 / datepicker
// 결제방법 : textarea
// 비고 및 특이사항 : textarea
export interface EtcProps {
  issueDate?: Date;
  validDate?: Date;
  paymentMethod?: string;
  remarks?: string;
}
