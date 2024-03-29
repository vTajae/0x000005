import React from "react";
import PropTypes from "prop-types";
import { CardContent, CardMedia, Grid, Typography } from "@mui/material";
import {
  StyledCard,
  SectionTitle,
  StyledBox,
  AboutWrapper,
  StyledBox2,
  StyledBox3,
  TranslucentContainer,
} from "./styles";
import {
  whyChooseUsSectionData,
  featureSectionData,
  testimonialSectionData,
} from "./data";

const ServiceCard = ({ title, description, image }) => (
  <Grid item xs={12} sm={6} md={6}>
    <StyledCard>
      <CardMedia component="img" height="140" image={image} alt="Placeholder" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </StyledCard>
  </Grid>
);

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

const Testimonial = ({ name, quote, image }) => (
  <Grid item xs={12} sm={4}>
    <StyledCard
      elevation={1}
      sx={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
    >
      <CardMedia component="img" height="140" image={image} alt="Placeholder" />
      <CardContent>
        <Typography variant="subtitle1">{name}</Typography>
        <Typography>"{quote}"</Typography>
      </CardContent>
    </StyledCard>
  </Grid>
);

Testimonial.propTypes = {
  name: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
};

const FeatureSection = ({ title, items }) => (
  <StyledBox>
    <SectionTitle variant="h3" align="center" color="primary">
      {title}
    </SectionTitle>
    <Grid container spacing={4}>
      {items.map((item) => (
        <ServiceCard
          key={item.id}
          title={item.title}
          description={item.description}
          image={item.image}
        />
      ))}
    </Grid>
  </StyledBox>
);

FeatureSection.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const TestimonialSection = ({ title, testimonials }) => (
  <StyledBox3>
    <SectionTitle variant="h3" align="center" color="primary">
      {title}
    </SectionTitle>
    <Grid container spacing={4} justifyContent="center">
      {testimonials.map((testimonial) => (
        <Testimonial
          image={testimonial.image}
          key={testimonial.id}
          name={testimonial.name}
          quote={testimonial.quote}
        />
      ))}
    </Grid>
  </StyledBox3>
);

TestimonialSection.propTypes = {
  title: PropTypes.string.isRequired,
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      quote: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const WhyChooseUsSection = ({ title, items }) => (
  <StyledBox2>
    <SectionTitle variant="h3" align="center" color="primary">
      {title}
    </SectionTitle>
    <TranslucentContainer>
      <Grid container spacing={4} justifyContent="center">
        {items.map((item) => (
          <Grid item xs={12} sm={6} key={item.id}>
            <Typography variant="h4" align="center" color="primary">
              {item.title}
            </Typography>
            <Typography align="center" sx={{ mt: 2 }}>
              {item.description}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </TranslucentContainer>
  </StyledBox2>
);

WhyChooseUsSection.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const AboutUs = () => (
  <AboutWrapper>
    <FeatureSection title="Featured Services" items={featureSectionData} />

    <WhyChooseUsSection title="Why Choose Us?" items={whyChooseUsSectionData} />

    <TestimonialSection
      title="Testimonials"
      testimonials={testimonialSectionData}
    />
  </AboutWrapper>
);

export default AboutUs;
