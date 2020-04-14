const listItems = items.map((item, index) => (
  <div>
    <Collapse
      accordion
      activeKey={activeKey}
      defaultActiveKey={["0"]}
      onChange={this.callback}
      expandIconPosition="right"
    >
      <Panel
        header={
          <div className="header-container">
            <div className="item-name">{item.itemName}</div>
            <Button
              className="close-btn"
              onClick={e => {
                this.deleteItem(e, index);
              }}
            >
              <Icon type="close" />
            </Button>
          </div>
        }
        key={index}
      >
        {
          <div>
            <Input
              defaultValue={item.itemName}
              inputtype="text"
              title="Add Item Name"
              name="add-item-name"
              placeholder="Add Item Name"
              handlechange={e => this.onItemNameChange(e, index)}
              error=""
            />
            <Input
              defaultValue={item.itemLink}
              inputtype="text"
              title="Add Item Link"
              name="add-item-link"
              placeholder="Add Item Link"
              handlechange={e => this.onItemLinkChange(e, index)}
              error=""
            />
            <Input
              defaultValue={item.itemDescription}
              inputtype="text"
              title="Enter Link Description"
              name="enter-link-description"
              placeholder="Enter Link Description"
              handlechange={e => this.onItemDescriptionChange(e, index)}
              error=""
            />
            <input
              id={`${index}`}
              label="Upload file"
              type="file"
              accept={["image/png", "image/jpg", "image/jpeg"].toString()}
              onChange={e => {
                this.handleFileUpload(e, index);
              }}
            />
            {defaultImagesData && defaultImagesData[index].file && (
              <ImageCrop
                file={defaultImagesData[index].file}
                src={defaultImagesData[index].src}
                aspectRatio={1 / 1}
                getCroppedImage={image => {
                  this.getCroppedImage(image, index);
                }}
              />
            )}
            {defaultImagesData && defaultImagesData[index].file && imagesData[index] && imagesData[index].file && (
              <Button
                type="primary"
                size="small"
                ghost
                onClick={e => {
                  this.submitFile(e, index);
                }}
              >
                {"Crop"}
              </Button>
            )}
            {defaultImagesData &&
              defaultImagesData[index].file &&
              (items[index].itemImageLink || defaultImagesData[index].loading) && (
                <Images
                  loading={defaultImagesData[index].loading}
                  image={items[index].itemImageLink || defaultImagesData[index].itemImageLink}
                  title=""
                  styleclass="featured-image-with-credits"
                />
              )}
          </div>
        }
      </Panel>
    </Collapse>
  </div>
));
