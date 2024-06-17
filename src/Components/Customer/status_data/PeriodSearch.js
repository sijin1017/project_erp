import * as React from 'react'
import "../../Main/Main.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const CustomerStatusPeriodSerchBox = () => {
  const [selectedOption, setSelectedOption] = React.useState('1년');
  const [isAbled, setIsAbled] = React.useState(false);
  const [startDate, setStartDate] = React.useState('');
  const [endDate, setEndDate] = React.useState('');

  const datas = ['3개월', '6개월', '1년', '사용자 지정']

  React.useEffect(() => {
    const now = new Date();
    const today = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().split('T')[0]; // 오늘 날짜로 설정
    setEndDate(today);

    const calculateStartDate = (monthsAgo) => {
      const date = new Date();
      date.setMonth(date.getMonth() - monthsAgo);
      return date.toISOString().split('T')[0];
    };

    switch (selectedOption) {
      case '3개월':
        setStartDate(calculateStartDate(3));
        break;
      case '6개월':
        setStartDate(calculateStartDate(6));
        break;
      case '1년':
        setStartDate(calculateStartDate(12));
        break;
      case '사용자 지정':
        setIsAbled(true);
        setStartDate('');
        setEndDate(today);
        break;
      default:
        setIsAbled(false);
        setStartDate('');
        setEndDate(today);
        break;
    }
  }, [selectedOption]);
  const handleOptionChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    setIsAbled(value === '사용자 지정')
  }
  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  }
  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  }
  return (
    <div className="customer-status-period-serchbox">
      <div className="radio righted">
        {datas.map((data) => (
          <label key={data}>
            <input
              type="radio"
              name="search_for"
              value={data}
              checked={selectedOption === data}
              onChange={handleOptionChange}
            />&nbsp;{data}&nbsp;&nbsp;
          </label>
        ))}

      </div>
      <div className="date righted">
        {/* 사용자 지정 체크 여부에 따라 활성화 */}
        <input type="date" id="startDate" disabled={!isAbled} value={startDate}  style={{minWidth:'110px'}} onChange={handleStartDateChange}/>&nbsp;~&nbsp;
        <input type="date" id="endDate" disabled={!isAbled} value={endDate} style={{minWidth:'110px'}} onChange={handleEndDateChange}/>&nbsp;
        <div className="dropdown">
          <button className="btn btn-outline-secondary dropdown-toggle btn-sm " type="button" data-bs-toggle="dropdown" aria-expanded="false">
            검색
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">고객명</a></li>
            <li><a className="dropdown-item" href="#">상품평</a></li>
            <li><a className="dropdown-item" href="#">특이사항</a></li>
          </ul>
        </div>&nbsp;
        <div className="input-group">
          <span className="input-group-text"><FontAwesomeIcon icon={faSearch} /></span>
          <input type="text" id="keyword" className="form-control" placeholder="검색" />
        </div>&nbsp;
        <input type="submit" value="조회" className="btn btn-dark" />
      </div>
    </div>
  );
}

export default CustomerStatusPeriodSerchBox;