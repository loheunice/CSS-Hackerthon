.top {
    width: 100%;
    height: 50px;
    background-color: white;
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    z-index: 999;
    font-family: "Josefin Sans", sans-serif;
  }
  
  .topLeft,
  .topRight {
    flex: 3;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .topIcon {
    font-size: 20px;
    margin-right: 10px;
    color: #444;
    cursor: pointer;
  }
  
  .topCenter {
    flex: 6;
  }
  
  .topList {
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
    list-style: none;
  }
  
  .topListItem {
    margin-right: 20px;
    font-size: 18px;
    font-weight: 300;
    cursor: pointer;
  }
  
  .topListItem:hover{
      color: gray;
  }
  
  .topImg {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 15px;
    cursor: pointer;
  }
  
  .topSearchIcon {
    font-size: 18px;
    color: #666;
    cursor: pointer;
  }