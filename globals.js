global.window = global;

window.$ = require('jquery');
global.React = require('react/addons');
global.ReactRouter = require('react-router');
global.ReactInjection = require('react/lib/ReactInjection');
React.mergeProps = require('react/lib/ReactPropTransferer').mergeProps;
React.ReactCompositeComponent = require('react/lib/ReactCompositeComponent');
React.hyphenateStyleName = require('react/lib/hyphenateStyleName');
global.Link = ReactRouter.Link;
global.Route = ReactRouter.Route;
global.DefaultRoute = ReactRouter.DefaultRoute;
global.NotFoundRouteEEEE = ReactRouter.NotFoundRoute;
global.NotFoundRoute = ReactRouter.NotFoundRoute;
global.RouteHandler = ReactRouter.RouteHandler;
global.EventEmitter2 = require('eventemitter2').EventEmitter2;
global.Modernizr = {};
global.localStorage = {getItem: function() {}, setItem: function() {}};



global.Reactor = require('nuclear-js');



global.Mq = React.createClass({displayName: "Mq",
  render: function() {
    return React.createElement("div", null, this.props.children);
  }
});

global.ReactBootstrap = require('./src/global/vendor/bootstrap/index.jsx');

global.Container = ReactBootstrap.Container;
global.Grid = ReactBootstrap.Grid;
global.Row = ReactBootstrap.Row;
global.Col = ReactBootstrap.Col;
global.ColMixin = ReactBootstrap.ColMixin;
global.Lead = ReactBootstrap.Lead;
global.Table = ReactBootstrap.Table;
global.Form = ReactBootstrap.Form;
global.FormGroup = ReactBootstrap.FormGroup;
global.Label = ReactBootstrap.Label;
global.Input = ReactBootstrap.Input;
global.InputGroup = ReactBootstrap.InputGroup;
global.InputGroupAddon = ReactBootstrap.InputGroupAddon;
global.InputGroupButton = ReactBootstrap.InputGroupButton;
global.Checkbox = ReactBootstrap.Checkbox;
global.Radio = ReactBootstrap.Radio;
global.Button = ReactBootstrap.Button;
global.Textarea = ReactBootstrap.Textarea;
global.Select = ReactBootstrap.Select;
global.Static = ReactBootstrap.Static;
global.Icon = ReactBootstrap.Icon;
global.HelpBlock = ReactBootstrap.HelpBlock;
global.Img = ReactBootstrap.Img;
global.Caret = ReactBootstrap.Caret;
global.Dropdown = ReactBootstrap.Dropdown;
global.DropdownButton = ReactBootstrap.DropdownButton;
global.Menu = ReactBootstrap.Menu;
global.MenuItem = ReactBootstrap.MenuItem;
global.ButtonGroup = ReactBootstrap.ButtonGroup;
global.ButtonToolbar = ReactBootstrap.ButtonToolbar;
global.Tab = ReactBootstrap.Tab;
global.TabPane = ReactBootstrap.TabPane;
global.TabList = ReactBootstrap.TabList;
global.TabContent = ReactBootstrap.TabContent;
global.TabContainer = ReactBootstrap.TabContainer;
global.Nav = ReactBootstrap.Nav;
global.NavBar = ReactBootstrap.NavBar;
global.NavText = ReactBootstrap.NavText;
global.NavLink = ReactBootstrap.NavLink;
global.NavItem = ReactBootstrap.NavItem;
global.NavForm = ReactBootstrap.NavForm;
global.NavBrand = ReactBootstrap.NavBrand;
global.NavHeader = ReactBootstrap.NavHeader;
global.NavToggle = ReactBootstrap.NavToggle;
global.NavButton = ReactBootstrap.NavButton;
global.NavContent = ReactBootstrap.NavContent;
global.BLink = ReactBootstrap.BLink;
global.Breadcrumb = ReactBootstrap.Breadcrumb;
global.Page = ReactBootstrap.Page;
global.Pager = ReactBootstrap.Pager;
global.Pagination = ReactBootstrap.Pagination;
global.Badge = ReactBootstrap.Badge;
global.BLabel = ReactBootstrap.BLabel;
global.Jumbotron = ReactBootstrap.Jumbotron;
global.Progress = ReactBootstrap.Progress;
global.ProgressGroup = ReactBootstrap.ProgressGroup;
global.Media = ReactBootstrap.Media;
global.MediaDiv = ReactBootstrap.MediaDiv;
global.MediaBody = ReactBootstrap.MediaBody;
global.MediaList = ReactBootstrap.MediaList;
global.MediaObject = ReactBootstrap.MediaObject;
global.MediaHeading = ReactBootstrap.MediaHeading;
global.ListGroup = ReactBootstrap.ListGroup;
global.ListGroupItem = ReactBootstrap.ListGroupItem;
global.ListGroupItemText = ReactBootstrap.ListGroupItemText;
global.ListGroupItemHeading = ReactBootstrap.ListGroupItemHeading;
global.Well = ReactBootstrap.Well;
global.Modal = ReactBootstrap.Modal;
global.ModalBody = ReactBootstrap.ModalBody;
global.ModalHeader = ReactBootstrap.ModalHeader;
global.ModalFooter = ReactBootstrap.ModalFooter;
global.ModalManager = ReactBootstrap.ModalManager;
global.Panel = ReactBootstrap.Panel;
global.PanelBody = ReactBootstrap.PanelBody;
global.PanelHeader = ReactBootstrap.PanelHeader;
global.PanelFooter = ReactBootstrap.PanelFooter;
global.PanelLeft = ReactBootstrap.PanelLeft;
global.PanelRight = ReactBootstrap.PanelRight;
global.PanelContainer = ReactBootstrap.PanelContainer;
global.LoremIpsum = ReactBootstrap.LoremIpsum;
global.TimelineView = ReactBootstrap.TimelineView;
global.TimelineItem = ReactBootstrap.TimelineItem;
global.TimelineHeader = ReactBootstrap.TimelineHeader;
global.TimelineIcon = ReactBootstrap.TimelineIcon;
global.TimelineAvatar = ReactBootstrap.TimelineAvatar;
global.TimelineTitle = ReactBootstrap.TimelineTitle;
global.TimelineBody = ReactBootstrap.TimelineBody;
global.Accordian = ReactBootstrap.Accordian;
global.AccordianPane = ReactBootstrap.AccordianPane;
global.AccordianTitle = ReactBootstrap.AccordianTitle;
global.AccordianContent = ReactBootstrap.AccordianContent;
global.IonTabContainer = ReactBootstrap.IonTabContainer;
global.IonTabHead = ReactBootstrap.IonTabHead;
global.IonTabBody = ReactBootstrap.IonTabBody;
global.IonTab = ReactBootstrap.IonTab;
global.IonTabItem = ReactBootstrap.IonTabItem;
global.PricingTable = ReactBootstrap.PricingTable;
global.PricingFeature = ReactBootstrap.PricingFeature;
global.PricingTableBody = ReactBootstrap.PricingTableBody;
global.PricingTablePrice = ReactBootstrap.PricingTablePrice;
global.PricingTableHeader = ReactBootstrap.PricingTableHeader;
global.PricingTableContainer = ReactBootstrap.PricingTableContainer;
global.PricingButtonContainer = ReactBootstrap.PricingButtonContainer;
global.Alert = ReactBootstrap.Alert;
global.AlertLink = ReactBootstrap.AlertLink;
global.Tag = ReactBootstrap.Tag;
global.Sidebar = ReactBootstrap.Sidebar;
global.SidebarNav = ReactBootstrap.SidebarNav;
global.SidebarBtn = ReactBootstrap.SidebarBtn;
global.SidebarMixin = ReactBootstrap.SidebarMixin;
global.SidebarNavItem = ReactBootstrap.SidebarNavItem;
global.SidebarControls = ReactBootstrap.SidebarControls;
global.SidebarControlBtn = ReactBootstrap.SidebarControlBtn;

global.Entity = require('./src/global/vendor/l20n/l20n.jsx').Entity;