import { Container } from 'react-bootstrap';

const PageComponent = ({ serverData, moveToList }) => {
    console.log("page Component");
    return (
        <Container className="d-flex justify-content-center mt-3">
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    {
                        serverData.prev ? (
                            <li class="page-item" onClick={()=>{ moveToList({page: serverData.prevPage})}}><a class="page-link" href="#">Previous</a></li>
                        ) : (
                        <></>
                    )}
                    {
                        serverData.pageNumList.map((pageNum)=>{
                            return (
                                serverData.current === pageNum ? (
                                    <li class="page-item" key={pageNum} className='active' onClick={()=>{ moveToList({page: pageNum})}}><a class="page-link" href="#">{pageNum}</a></li>
                                ) : (
                                    <li class="page-item" key={pageNum} onClick={()=>{ moveToList({page: pageNum})}}><a class="page-link"  href="#">{pageNum}</a></li>
                                )
                            );
                        })
                    }
                    
                    {
                        serverData.next ? (
                            <li class="page-item" onClick={()=>{ moveToList({page: serverData.nextPage})}}><a class="page-link" href="#">Next</a></li>
                        ) : (
                        <></>
                        )
                    }
                    
                </ul>
            </nav>
        </Container>
    );
};

export default PageComponent;