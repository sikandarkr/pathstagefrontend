import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Button, Collapse, Icon } from "antd";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import ImageCrop from "../FileUploadButton/ImageCrop";
import Input from "../CustomisedInput/Input";
import Images from "../image/image";
const Wrapper = styled.div`
  .items .add-item-button {
    margin-left: 14px;
    width: 98%;
  }

  .form-group .control-label {
    display: none;
  }

  .items .form-group {
    margin-bottom: 10px;
    width: 98%;
  }

  .item-name {
    margin: auto 0;
  }
`;
const { Panel } = Collapse;
class Item extends React.Component {
  render() {
    console.log("your Item Index", this.props.task);
    const that = this;
    return (
      // <Draggable draggableId={this.props.index} index={this.props.index}>
      <div>
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
      // </Draggable>
    );
  }
}
Item.propTypes = {
  onItemChange: PropTypes.func
  // items: PropTypes.array
};
export default Item;
