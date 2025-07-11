import './DiaryItem.css';
import { getEmotionImage } from '../util/getEmotionImage';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

const DiaryItem = ({ id, emotionId, createdDate, content }) => {
    const nav = useNavigate();

    const goDiaryPage = () => {
        nav(`/diary/${id}`);
    };
    const goEditPage = () => {
        nav(`/edit/${id}`);
    };

    return (

        <div className='DiaryItem'>
            <section onClick={goDiaryPage} className='img_section'>
                <img src={getEmotionImage(emotionId)} />
            </section>
            <section onClick={goDiaryPage} className='info_section'>
                <div className='created_date'>{new Date(createdDate).toLocaleDateString()}</div>
                <div className='content'>{content}</div>
            </section>
            <section className='button_Section'>
                <Button onClick={goEditPage} text={'수정하기'} />
            </section>
        </div>
    );
};

export default DiaryItem;