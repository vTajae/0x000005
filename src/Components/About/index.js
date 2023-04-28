import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { StyledCard, SectionTitle, StyledBox } from "./styles";
import {
  whyChooseUsSectionData,
  featureSectionData,
  testimonialSectionData,
} from "./data";

const ServiceCard = ({ title, description, image }) => (
  <Grid item xs={12} sm={6} md={4}>
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

const Testimonial = ({ name, quote }) => (
  <Grid item xs={12} sm={4}>
    <Stack spacing={2}>
      <Typography variant="subtitle1">{name}</Typography>
      <Typography>"{quote}"</Typography>
    </Stack>
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
  <StyledBox>
    <SectionTitle variant="h3" align="center" color="primary">
      {title}
    </SectionTitle>
    <Grid container spacing={4} justifyContent="center">
      {testimonials.map((testimonial) => (
        <Testimonial
          key={testimonial.id}
          name={testimonial.name}
          quote={testimonial.quote}
        />
      ))}
    </Grid>
  </StyledBox>
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
  <StyledBox>
    <SectionTitle variant="h3" align="center" color="primary">
      {title}
    </SectionTitle>
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
  </StyledBox>
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
  <Box sx={{ backgroundColor: "#f5f5f5" }}>
    <FeatureSection
      title="Featured Services/Courses"
      items={featureSectionData}
    />

    <TestimonialSection
      title="Testimonials"
      testimonials={testimonialSectionData}
    />


    <WhyChooseUsSection title="Why Choose Us?" items={whyChooseUsSectionData} />


  </Box>
);

export default AboutUs;
