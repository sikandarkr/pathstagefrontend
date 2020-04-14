<Draggable draggableId={this.props.index} index={this.props.index}>
  {(provided, snapshot) => (
    <div
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      ref={provided.innerRef}
      isDragging={snapshot.isDragging}
    >
      <Collapse
        accordion
        activeKey={this.props.activeKey}
        defaultActiveKey={["0"]}
        onChange={this.props.callback}
        callback={this.props.callback}
        expandIconPosition="right"
      >
        <Panel
          header={
            <div className="header-container">
              <div className="item-name">{this.props.name}</div>
              <Button
                className="close-btn"
                // onClick={e => {
                //   that.props.deleteItem(e, this.props.index);
                // }}
                onClick={e => this.props.deleteItem(e, this.props.index)}
              >
                <Icon type="close" />
              </Button>
            </div>
          }
          key={this.props.index}
        >
          {
            <div>
              <Input
                defaultValue={this.props.name}
                inputtype="text"
                title="Add Item Name"
                name="add-item-name"
                placeholder="Add Item Name"
                handlechange={e => this.props.onItemNameChange(e, this.props.index)}
                error=""
              />
              <Input
                defaultValue={this.props.link}
                inputtype="text"
                title="Add Item Link"
                name="add-item-link"
                placeholder="Add Item Link"
                handlechange={e => this.props.onItemLinkChange(e, this.props.index)}
                error=""
              />
              <Input
                defaultValue={this.props.itemDescription}
                inputtype="text"
                title="Enter Link Description"
                name="enter-link-description"
                placeholder="Enter Link Description"
                handlechange={e => this.props.onItemDescriptionChange(e, this.props.index)}
                error=""
              />
              <input
                id={`${this.props.index}`}
                label="Upload file"
                type="file"
                accept={["image/png", "image/jpg", "image/jpeg"].toString()}
                onChange={e => this.props.handleFileUpload(e, this.props.index)}
              />
              {this.props.imagesData[this.props.index].file && (
                <ImageCrop
                  file={this.props.imagesData[this.props.index].file}
                  src={this.props.imagesData[this.props.index].src}
                  aspectRatio={1 / 1}
                  getCroppedImage={image => this.props.getCroppedImage(image, this.props.index)}
                />
              )}
              {this.props.imagesData[this.props.index].file && (
                <Button
                  type="primary"
                  size="small"
                  ghost
                  // onClick={e => {
                  //   this.submitFile(e, index);
                  // }}
                  onClick={e => this.props.submitFile(e, this.props.index)}
                >
                  {"Crop"}
                </Button>
              )}
              {(this.props.items[this.props.index].itemImageLink ||
                this.props.imagesData[this.props.index].loading) && (
                <Images
                  loading={this.props.imagesData[this.props.index].loading}
                  image={this.props.items[this.props.index].itemImageLink}
                  title=""
                  styleclass="featured-image-with-credits"
                />
              )}
            </div>
          }
        </Panel>
      </Collapse>
    </div>
  )}
</Draggable>;

// const listItems = items.map((item, index) => (
//   <div>
//     <Collapse
//       accordion
//       activeKey={activeKey}
//       defaultActiveKey={['0']}
//       onChange={this.callback}
//       callback={this.callback}
//       expandIconPosition='right'
//     >
//       <Panel
//         header={
//           <div className='header-container'>
//             <div className='item-name'>{item.itemName}</div>
//             <Button
//               className='close-btn'
//               onClick={e => {
//                 this.deleteItem(e, index);
//               }}
//             >
//               <Icon type='close' />
//             </Button>
//           </div>
//         }
//         key={index}
//       >
//         {
//           <div>
//             <Input
//               defaultValue={item.itemName}
//               inputtype='text'
//               title='Add Item Name'
//               name='add-item-name'
//               placeholder='Add Item Name'
//               handlechange={e => this.onItemNameChange(e, index)}
//               error=''
//             />
//             <Input
//               defaultValue={item.itemLink}
//               inputtype='text'
//               title='Add Item Link'
//               name='add-item-link'
//               placeholder='Add Item Link'
//               handlechange={e => this.onItemLinkChange(e, index)}
//               error=''
//             />
//             <Input
//               defaultValue={item.itemDescription}
//               inputtype='text'
//               title='Enter Link Description'
//               name='enter-link-description'
//               placeholder='Enter Link Description'
//               handlechange={e => this.onItemDescriptionChange(e, index)}
//               error=''
//             />
//             <input
//               id={`${index}`}
//               label='Upload file'
//               type='file'
//               accept={['image/png', 'image/jpg', 'image/jpeg'].toString()}
//               onChange={e => {
//                 this.handleFileUpload(e, index);
//               }}
//             />
//             {imagesData[index].file && (
//               <ImageCrop
//                 file={imagesData[index].file}
//                 src={imagesData[index].src}
//                 aspectRatio={1 / 1}
//                 getCroppedImage={image => {
//                   this.getCroppedImage(image, index);
//                 }}
//               />
//             )}
//             {imagesData[index].file && (
//               <Button
//                 type='primary'
//                 size='small'
//                 ghost
//                 onClick={e => {
//                   this.submitFile(e, index);
//                 }}
//               >
//                 {'Crop'}
//               </Button>
//             )}
//             {(items[index].itemImageLink || imagesData[index].loading) && (
//               <Images
//                 loading={imagesData[index].loading}
//                 image={items[index].itemImageLink}
//                 title=''
//                 styleclass='featured-image-with-credits'
//               />
//             )}
//           </div>
//         }
//       </Panel>
//     </Collapse>
//   </div>
// ));

{
  /* {listItems} */
}

{
  this.props.items.map((column, index) => {
    return (
      <Item
        key={column.id}
        task={column}
        activeKey={this.state.activeKey}
        index={index}
        name={column.itemName}
        link={column.itemLink}
        items={items}
        callback={this.callback}
        imagesData={this.state.imagesData}
        itemDescription={column.itemDescription}
        submitFile={(e, index) => this.submitFile(e, index)}
        getCroppedImage={(image, index) => this.getCroppedImage(image, index)}
        onItemNameChange={(e, index) => this.onItemNameChange(e, index)}
        deleteItem={(e, index) => this.deleteItem(e, index)}
        handleFileUpload={(e, index) => this.handleFileUpload(e, index)}
        onItemLinkChange={(e, index) => this.onItemLinkChange(e, index)}
        onItemDescriptionChange={(e, index) => onItemDescriptionChange(e, index)}
      />
    );
  });
}
